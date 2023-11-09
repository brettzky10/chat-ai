import { Room } from "@/components/doc/room";
import { TextEditor } from "@/components/doc/TextEditor";

export default function DocCollabPanel() {
  return (
    <main>
      <Room>
        <TextEditor />
      </Room>
    </main>
  );
}
