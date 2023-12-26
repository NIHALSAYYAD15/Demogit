//after warads

async function fetechData{
    const data = await fetch('https://jsonplaceholder.tyicode.cpm/todos/1')
    console.log(await data.json())
}

fetechData();