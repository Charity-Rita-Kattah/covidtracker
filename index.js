let data = [
    {
        country: "Ghana",
        confirmed: "2100",
        deaths: "24",
        recovered: "2024",
        active: "113",
    },
    {
        country: "Italy",
        confirmed: "2100",
        deaths: "24",
        recovered: "2024",
        active: "113",
    },
    {
        country: "Cameroon",
        confirmed: "2100",
        deaths: "24",
        recovered: "2024",
        active: "113",
    },
    {
        country: "Sudan",
        confirmed: "2100",
        deaths: "24",
        recovered: "2024",
        active: "113",
    },
    {
        country: "Chad",
        confirmed: "2100",
        deaths: "24",
        recovered: "2024",
        active: "113",
    },
    {
        country: "Mali",
        confirmed: "2100",
        deaths: "24",
        recovered: "2024",
        active: "113",
    },
    {
        country: "Togo",
        confirmed: "2100",
        deaths: "24",
        recovered: "2024",
        active: "113",
    },
    {
        country: "Nigeria",
        confirmed: "2100",
        deaths: "24",
        recovered: "2024",
        active: "113",
    },
    {
        country: "United Kingdom",
        confirmed: "2100",
        deaths: "24",
        recovered: "2024",
        active: "113",
    },
    {
        country: "Bangledesh",
        confirmed: "2100",
        deaths: "24",
        recovered: "2024",
        active: "113",
    },
    {
        country: "Korea",
        confirmed: "2100",
        deaths: "24",
        recovered: "2024",
        active: "113",
    },
    {
        country: "Germany",
        confirmed: "2100",
        deaths: "24",
        recovered: "2024",
        active: "113",
    },
    
];

// console.log(data);

function Covid(props) {
    // console.log(props);
    return (
        <tr>
            <td>{props.country}</td>
            <td>{props.confirmed}</td>
            <td>{props.deaths}</td>
            <td>{props.recovered}</td>
            <td>{props.active}</td>
        </tr>
    );
}

let covid1 = data.map(i => (
    <Covid
        country={i.country}
        confirmed={i.confirmed}
        deaths={i.deaths}
        recovered={i.recovered}
        active={i.active}
    />
));

ReactDOM.render(
    <React.StrictMode>{covid1}</React.StrictMode>,
    document.getElementById("root")
);
