import React,{Component} from 'react';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Collapse,ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
   Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Pag extends Component{
  
  render(){

  const {perPage,currentPage,blogs,first,prev,updatePage,last,next}=this.props;
let Page=Math.ceil(blogs.length/perPage);
  let arr=[]
for(let i=1;i<=Page;i++){
arr.push(i);

}
  return(
<div className="Pag">
<Pagination aria-label="Page navigation example">
    <PaginationItem>
        <PaginationLink first href="#"  onClick={first}/>
      </PaginationItem>
       {currentPage!==1&&
      <PaginationItem>
        <PaginationLink previous href="#" onClick={prev}/>

      </PaginationItem>
    }
   { 
  arr.map(num =>
      <PaginationItem >
        <PaginationLink  href="#" onClick={() => updatePage(num)} >
        {num}
        </PaginationLink>
      </PaginationItem>
      )
    }
      {currentPage!==arr[Page-1]&&
      <PaginationItem>
        <PaginationLink next href="#" onClick={next}/>
      </PaginationItem>
    }
    
    
      <PaginationItem>
        <PaginationLink last href="#" onClick={() => last(arr[Page-1])} />
      </PaginationItem>
    </Pagination>
</div>
    )
  }
}
  export default Pag