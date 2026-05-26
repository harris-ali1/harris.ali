export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-row">
        <div className="mono">© {new Date().getFullYear()} Harris Ali · Houston, TX</div>
        <div className="mono">
          Designed &amp; built with React + Vite ·{" "}
          <a className="mono" href="https://github.com/harris-ali1" target="_blank" rel="noreferrer">source</a>
        </div>
      </div>
    </footer>
  );
}
