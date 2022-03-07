import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const OutpassModal = (props) => {

  return (
    <ListGroup>
      <ListGroupItemHeading>Student Details</ListGroupItemHeading>
      <ListGroupItem>
        <ListGroupItemText>
          Name : {props.outpass.firstname + props.outpass.lastname}
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemText>
          Email : {props.outpass.email}
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemText>
          Phone : {props.outpass.phone}
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemText>
          Branch : {props.outpass.branch}
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemText>
          Registration No. : {props.outpass.regno}
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemText>
          Block : {props.outpass.block}
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemText>
          Room No. : {props.outpass.room}
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItemHeading>Leave Address</ListGroupItemHeading>
      <ListGroupItem>
        <ListGroupItemText>
          Address 1 : {props.outpass.address1}
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemText>
          Address 2 : {props.outpass.address2}
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemText>
          City : {props.outpass.city}
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemText>
          State : {props.outpass.formState}
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemText>
          Zip : {props.outpass.zip}
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItemHeading>Reason for leave</ListGroupItemHeading>
      <ListGroupItem>
        <ListGroupItemText>
          {props.outpass.description}
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItemHeading>Date and Time</ListGroupItemHeading>
      <ListGroupItem>
        <ListGroupItemText>
          Date and Time of departure : {props.outpass.fromDate + " " + props.outpass.fromTime}
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemText>
          Date and Time of arrival : {props.outpass.toDate + " " + props.outpass.toTime}
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup>
  )
}

export default OutpassModal;