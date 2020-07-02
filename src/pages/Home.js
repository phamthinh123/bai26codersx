import React,{Component} from 'react';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Collapse,ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
    } from 'reactstrap';

import axios from "axios"
class Home extends Component{
	constructor(props){
		super(props);
		this.state={
			blogs:[]

		} 

	}
  componentDidMount(){
    axios.get("https://kq0p6.sse.codesandbox.io/blogs").then(res => 
this.setState({
      blogs: res.data
    })
      )
  }

  
	render(){

let {blogs}=this.state;


blogs=blogs.slice(0,4)
		return(
<Container>

<div className="Home">
<Row>
{

blogs.map(i =>
	
		<Col sm="4">
		 <Card >
        <CardImg top width="100%" src={i.img} />
        <CardBody>
          <CardTitle>{i.title}</CardTitle>
          
          <CardText>{i.description}</CardText>
          <Button>Đọc thêm...</Button>
        </CardBody>
      </Card>
     </Col>

		)
}
</Row>



</div>

</Container>
			)
	}

}
export default Home
