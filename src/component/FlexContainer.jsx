function FlexContainer(props) {
  
    const styleFlex ={
        display: "flex",
        flexWrap:"wrap",
        flexDirection:"row",
        gap:"15xp"
    }
   
return (<div style={styleFlex}>{props.childen}</div>)
 
}

export default FlexContainer