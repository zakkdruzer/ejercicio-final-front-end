/* eslint-disable react/prop-types */

const Issue = (props) => {
    const { issue } = props
    const { id, title, user:userIssue, html_url } = issue

  return (
    <div key={id} style={{ border: '1px solid black', padding: '20px'}}>
    <a href={html_url} >Issue ID: {id}</a>
    <p>Title: {title}</p>
    <p>User name: {userIssue.login}</p>
    <div id="idLabels">
      {issue.labels.map((label)=>{
          return (
              <p style={{padding: '10px', border: '1px solid black',borderRadius: '10px'}}
            
          >Label: {label.name}</p>
          )
      })}
    </div>
</div>
  )
}

export default Issue