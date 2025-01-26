import Tag from './Tag';

export default function Card() {
    return (
        <div className="card">
            <img src="asif.jpg" alt="Developer Image"></img>
            <h2>Md Asifullah</h2>
            <p>
                I am a junior software engineer skilled in full-stack web
                development, database management, and OOP. I’m passionate about
                building responsive, interactive solutions using PHP, Laravel,
                and Vue.js.
            </p>
            <div className="tags">
                <Tag name="HTML" type="code" />
                <Tag name="CSS" type="code" />
                <Tag name="JavaScript" type="code" />
                <Tag name="PHP" type="code" />
                <Tag name="Vue" type="code" />
                <Tag name="Laravel" type="code" />
                <Tag name="MySQL" type="database" />
                <Tag name="WordPress" type="layer-group" />
            </div>
        </div>
    );
}
