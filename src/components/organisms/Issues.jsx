import { useState } from "react"
import Issue from "../molecules/Issue"
import { useEffect } from "react";

const Issues = () => {
    const [loading, setLoading] = useState(false); // mientras espero 
    const [issues, setIssues] = useState([]) // si todo sale chido
    const [error, setError] = useState(null) // si todo sale mal
    const [search, setSearch] = useState('') // barra de busqueda
    const [issuesFilter,setIssuesFilter] = useState([])

    const changeInputSearch = (value) => {
        setSearch (value)
    }

    useEffect(() => {
        const fetchIssues = async () => {
            try {
                setLoading(true);
                const responseApi = await fetch('https://api.github.com/repos/facebook/react/issues');
                if(responseApi.status !== 200){
                    throw new Error('Error al obtener los datos')
                    //{message:'Error al obtener los datos' }
                }
                const data = await responseApi.json();
                setIssues(data);
                console.log(data);       
            } catch (error) {
                setError(`message: ${error.message}`)
            } finally {
                setLoading(false)
            }
        }

        fetchIssues()
    }, [])
    
    useEffect(() => {
        if(search === '' && search.length === 0){
            setIssuesFilter(issues)
        } else {
            const newIssues = issues.filter((issue) => {
                if(issue.title.toLowerCase().includes(search.toLowerCase())){
                    return issue;
                }

            })
            setIssuesFilter(newIssues)
        }
    },[search, issues])

    if(loading === true) return <p>Cargando....</p>
    if(error !== null) return <p>Ocurrio un error: {error}</p>

  return (
    <div>
        <h1>React Issues</h1>
        <input type="text" onChange={()=>{changeInputSearch(event.target.value)}}/>
        {
            issuesFilter.map((issue) => {
                return (

                    <Issue
                        key={issue.id} 
                        id={issue.id}
                        issue={issue}
                    />

                )
            })
        }
    </div>
  )
}

export default Issues