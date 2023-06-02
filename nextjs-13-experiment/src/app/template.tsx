export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
        {/* This section will be shown for the whole app and this is rendered each and every time - new instances will be created*/}
      <h1>I'm Root template</h1>
      <br/>
      {children}
    </div>
  );
}
