import React,{Component} from 'react';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,CardLink,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import Avatar from "../img/96017573_564874234442218_3389986844572647424_n.png"
  import Face from "../img/facebook.svg";
  import Git from "../img/github.svg"
class AboutMe extends Component{

	render(){
		return(
<Container>

<div className="AboutMe">
{

		
		<Card>
        <CardImg top width="100%" src={Avatar}  />
        <CardBody inverse color="info" >
          <CardTitle><h1>ABOUT ME</h1></CardTitle>
          
          <CardText>HỌ VÀ TÊN: phạm xuân thịnh</CardText>
             <CardText>EMAIL: thinoi987654321@gmail.com</CardText>
                <CardText>SỐ ĐIỆN THOẠI: 0988418412</CardText>
                   <CardText>CÁC TRƯỜNG ĐÃ HỌC: Học viện công nghệ bưu chính viễn thông</CardText>
                            <CardText>GITHUB URL: https://github.com/phamthinh123</CardText>
           <CardLink href="https://www.facebook.com/thinh.thinh.75457"><img src={Face} width="34" height="34"/></CardLink>
          <CardLink href="https://github.com/phamthinh123"><img src={Git} width="34" height="34"/></CardLink>

         
        </CardBody>
      </Card>
     
		
}
</div>

</Container>
			)
	}
}
export default AboutMe
