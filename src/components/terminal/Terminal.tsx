import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent, type ReactNode } from "react";
import Fastfetch from "./Fastfetch";
import { commands } from "./commands";
import type { Theme } from "../../hooks/useTheme";

type Entry = { id: number; input: string; output: ReactNode };

// Same segments as my starship prompt: directory, git branch, then the arrow
function Prompt() {
  return (
    <span className="shrink-0">
      <span className="font-bold text-blue">~/portfolio</span>
      <span className="text-muted"> on </span>
      <span className="text-purple">main</span>
      <span className="text-green"> ❯ </span>
    </span>
  );
}

export default function Terminal({ onSetTheme }: { onSetTheme: (theme: Theme) => void }) {
  const [history, setHistory] = useState<Entry[]>([]);
  const [input, setInput] = useState("");
  const [past, setPast] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);

  useEffect(() => {
    const screen = screenRef.current;
    if (screen) screen.scrollTop = screen.scrollHeight;
  }, [history]);

  function run(raw: string) {
    const [name, ...args] = raw.trim().split(/\s+/);
    if (!name) return;

    let cleared = false;
    const command = commands[name.toLowerCase()];
    const output = command
      ? command.run(args, {
          setTheme: onSetTheme,
          clear: () => {
            cleared = true;
          },
        })
      : <span className="text-red">command not found: {name}. Try <span className="text-green">help</span></span>;

    setPast((current) => [raw, ...current]);
    setCursor(-1);
    if (cleared) {
      setHistory([]);
    } else {
      setHistory((current) => [...current, { id: nextId.current++, input: raw, output }]);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    run(input);
    setInput("");
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowUp" && past.length > 0) {
      event.preventDefault();
      const next = Math.min(cursor + 1, past.length - 1);
      setCursor(next);
      setInput(past[next]);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = cursor - 1;
      setCursor(Math.max(next, -1));
      setInput(next >= 0 ? past[next] : "");
    }
  }

  return (
    <div
      className="overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/10 dark:shadow-black/40"
      onClick={() => inputRef.current?.focus({ preventScroll: true })}
    >
      {/* Window bar, like Windows Terminal with my Ubuntu tab */}
      <div className="flex items-center justify-between border-b border-line bg-raised/60 pr-3 font-mono text-xs">
        <div className="flex items-center gap-2 border-r border-line bg-surface px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-orange" />
          <span>Ubuntu-22.04</span>
          <span className="text-muted">×</span>
        </div>
        <div className="flex gap-3 text-muted" aria-hidden="true">
          <span>─</span>
          <span>□</span>
          <span>×</span>
        </div>
      </div>

      <div ref={screenRef} className="max-h-[30rem] overflow-y-auto p-4 font-mono text-[0.8rem] leading-relaxed sm:p-5">
        <p>
          <Prompt />
          <span>fastfetch</span>
        </p>
        <Fastfetch />

        {history.map((entry) => (
          <div key={entry.id} className="mt-2">
            <p className="break-all">
              <Prompt />
              <span>{entry.input}</span>
            </p>
            {entry.output && <div className="mt-1 break-words">{entry.output}</div>}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="mt-2 flex items-center">
          <label htmlFor="terminal-input" className="sr-only">
            Type a command, for example help
          </label>
          <Prompt />
          <input
            ref={inputRef}
            id="terminal-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            placeholder="type help"
            className="min-w-0 flex-1 bg-transparent pl-[1ch] text-fg caret-green outline-none placeholder:text-muted/60 focus-visible:outline-none"
          />
        </form>
      </div>
    </div>
  );
}
