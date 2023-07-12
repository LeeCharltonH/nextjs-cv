import { ReactNode } from "react";

interface PageComposerProps {
  children: React.ReactNode;
}

export const PageComposer = ({children}: PageComposerProps): ReactNode => {
  return <>
    <nav>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
      </ul>
    </nav>
    <main>
    {children}
    </main>
  </>
}