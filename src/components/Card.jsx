import Tag from "./Tag";

export default function Card() {
  return (
    <div className="card">
      <img src="asif.jpg" alt="Developer Image"></img>
      <h2>Md Asifullah</h2>
      <p>
        I am a junior software engineer skilled in full-stack web development,
        database management, and OOP. I’m passionate about building responsive,
        interactive solutions using PHP, Laravel, and Vue.js.
      </p>
      <div className="tags">
        <Tag level="advanced" name="HTML" type="code" />
        <Tag level="advanced" name="CSS" type="code" />
        <Tag level="intermediate" name="JavaScript" type="code" />
        <Tag level="begineer" name="TypeScript" type="code" />
        <Tag level="intermediate" name="PHP" type="code" />
        <Tag level="intermediate" name="Vue" type="code" />
        <Tag level="intermediate" name="Laravel" type="code" />
        <Tag level="intermediate" name="MySQL" type="database" />
        <Tag level="intermediate" name="WordPress" type="layer-group" />
      </div>
    </div>
  );
}
