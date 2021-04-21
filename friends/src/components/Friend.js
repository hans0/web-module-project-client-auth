const Friend = (props) => {
  const { friend } = props;
  console.log(props)
  return(
    <div id={friend.id}>
      {friend.name}
    </div>
  )
}

export default Friend;