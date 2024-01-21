/*------------ GET all Reflections ------------*/
axios.get('http://localhost:5000/api/v1/stoic/reflections')
    .then(function (response) {
        const journals = document.getElementById('journals')
        console.log(new Date())
        const ds = response.data.reflections

        const htmlContent = ds.map(journal => `
            <div class="journals__container">
                <p>Day ${getNumberDayOfTheYear(journal.date)}</p>
                <h1>${journal.title}</h1>
                <a href="#">readmore >></a>
            </div>
        `).join('')

        journals.innerHTML = htmlContent;
    })
    .catch(function (error) {
        console.error('Error fetching data:', error);
    });



/*------------ POST Reflection ------------*/
const title = document.getElementById('title')

const addReflection = () => {
    axios.post('http://localhost:5000/api/v1/stoic/reflections',{
        author: "author",
        date: "Sun Jan 21 2024 17:07:44 GMT+0800 (Philippine Standard Time)",
        title: title.value,
        summary: "summary loremm",
        created_at: new Date(),
        updated_at: new Date()
    })
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    });
}
