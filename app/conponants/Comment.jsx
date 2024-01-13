import React from 'react'

class Comment extends React.Component {
  constructor(props){
    super(props);
  }

  comment = () => {
    return (<Comment data={{
      by : "me",
      value : "just commenting"
    }} />)
  }

  render(){
    return (
      <div className='pl-5'>
        <p>{this.props.data.by}</p>
        <p>{this.props.data.value}</p>
      </div>
    )
  }
}

export default Comment