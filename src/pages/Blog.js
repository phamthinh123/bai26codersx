import React,{Component} from 'react';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Collapse,ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
   Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Pag from "../components/Pagination";
import axios from "axios"
class Blog extends Component{
	constructor(props){
		super(props);
		this.state={
			blogs:[],
perPage:4,
currentPage:1

		} 
this.first=this.first.bind(this);
this.prev=this.prev.bind(this);
this.updatePage=this.updatePage.bind(this);
this.next=this.next.bind(this);
this.last=this.last.bind(this)
	}
  componentDidMount(){
    axios.get("https://kq0p6.sse.codesandbox.io/blogs").then(res => 
this.setState({
      blogs: res.data
    })
      )
  }
  first(){
    
    this.setState({
      currentPage: 1
    })
    
  }
 prev(){
    
    this.setState({
      currentPage: this.state.currentPage-1
    })
    
  }
  updatePage(num){
    
  this.setState({
      currentPage: num
    })
    
  }
  next(){
    
    this.setState({
      currentPage: this.state.currentPage+1
    })
    
  }

  last(num){
    
    this.setState({
      currentPage:num
    })
    
  }
	render(){

let {perPage,currentPage,blogs}=this.state;

let end=currentPage*perPage;
let start=end-perPage;
blogs=blogs.slice(start,end)
		return(
<Container>

<div className="Blog">
<ListGroup>

{

blogs.map(i =>
		<ListGroupItem >
        <img src={i.img} />
        <ListGroupItemHeading>{i.title}</ListGroupItemHeading>
        <ListGroupItemText>
        {i.description}
        </ListGroupItemText>
        <Button>Đọc thêm...</Button>
      </ListGroupItem>
		
     
		)
}

</ListGroup>
 <Pag perPage={perPage} currentPage={currentPage} blogs={this.state.blogs} updatePage={this.updatePage} first={this.first} prev={this.prev} next={this.next} last={this.last}
 />

</div>
</Container>
			)
	}

}
export default Blog
