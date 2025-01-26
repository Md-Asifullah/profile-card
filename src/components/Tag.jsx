export default function Tag({ name, type = 'code' }) {
    const bgColors = [
        '#7b34bb',
        '#7f848c',
        '#5371b4',
        '#653a77',
        '#5334b8',
        '#4736a7',
        '#7085ae',
        '#667da6',
        '#7e70ab',
        '#938c83',
        '#507ca5',
        '#8e9679',
        '#715b7f',
        '#8889c1',
        '#7a54be',
        '#4d60c4',
        '#3566a1',
        '#6b6b87',
        '#547879',
        '#865775',
        '#405298',
        '#327179',
        '#955c7c',
        '#7387a6',
        '#704879',
        '#633da1',
        '#603672',
        '#906389',
        '#7990ad',
        '#6c7dab',
    ];

    const getRandomNumber = () => {
        return Math.floor(Math.random() * 29);
    };

    const randomColor = bgColors[getRandomNumber()];
    return (
        <div className="tag" style={{ backgroundColor: randomColor }}>
            <i className={`fas fa-${type}`}></i> {name}
        </div>
    );
}
