const React = require('react')
const Default = require('./layout/Default')

function Show ({bread, index}) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
      return (
        <Default>
  <h3>{bread.name}</h3>
  <p>
    and it
    {
      bread.hasGluten
      ? <span> does </span>
      : <span> does NOT </span>
    }
    have gluten.
  </p>
  <img src={bread.image} alt={bread.name} />  
  <a href={`/breads/${index}/edit`}><button>Edit</button></a>
<form action={`/breads/${index}?_method=DELETE`} method="POST">
  <input type='submit' value="DELETE"/>
</form>
  <a href="/breads"><button>Go home</button></a>
</Default>
      )
  }

module.exports = Show