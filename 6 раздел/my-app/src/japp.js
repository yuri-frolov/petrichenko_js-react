const text = '1235';

const date = new Date();
let dateStr = date.toString();

const hello = (
    <article>
        <h2>Хелло ворлд</h2>
        <span className="numbers">{text}</span>
        <button>{text}</button>
        <div>Дата: {dateStr}</div>
    </article>
);

/* const elem = {
    type: 'h2',
    props: {
        className: 'greeting',
        children: 'Привет, мир!'
    }
}; */

function japp() {
    return(
    hello
    )
}

export default japp;