export function createLoadingText(text: string) {
  const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

  let i = 0;
  const startTime = Date.now();

  const interval = setInterval(() => {
    const frame = frames[i++ % frames.length];

    const elapsedMs = Date.now() - startTime;
    const elapsedSec = (elapsedMs / 1000).toFixed(1);

    process.stdout.write(`\r${frame} ${text} (${elapsedSec}s)`);
  }, 80);

  return {
    stop(message?: string) {
      clearInterval(interval);

      const elapsedMs = Date.now() - startTime;
      const elapsedSec = (elapsedMs / 1000).toFixed(1);

      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);

      if (message) {
        console.log(`${message} (${elapsedSec}s)`);
      }
    },
  };
}
