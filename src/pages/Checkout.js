import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Breadcrumb,
  Form,
  Dropdown,
} from "react-bootstrap";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../Cart/shop-context";

function Checkout() {
  const { getTotalCartAmount, getDefaultCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const shipping = 15.99;
  const taxes = totalAmount * 0.13;
  const total = totalAmount + shipping + taxes;
  const [stage1, setStage1] = useState(true);
  const [stage2, setStage2] = useState(false);
  const [stage3, setStage3] = useState(false);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");

  const [cardholderName, setCardHolderName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cvv, setCVV] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cardType, setCardType] = useState("");

  const nav = useNavigate();

  const handleCart = () => {
    nav("/cart/user");
  };

  const handleNext = () => {
    if (stage1) {
      // Check validation before proceeding
      if (checkValidation()) {
        setStage1(false);
        setStage2(true);
      } else {
        alert("Please enter all fields");
      }
    } else if (stage2) {
      setStage2(false);
      setStage3(true);
    } else if (stage3) {
      if (checkCredentials()) {
        alert(`Purchase of $${total} success!`);
        
        nav("/home/horton");
      } else {
        alert("Please fill in all available fields");
      }
    }
  };
  const handlePrev = () => {
    if (stage1) {
      handleCart();
    } else if (stage2) {
      setStage1(true);
      setStage2(false);
    } else if (stage3) {
      setStage3(false);
      setStage2(true);
    }
  };

  const checkCredentials = () => {
    return (
      cardholderName !== "" &&
      cvv !== "" &&
      expiry !== "" &&
      cardNum !== "" &&
      cardType !== ""
    );
  };

  const checkValidation = () => {
    // Validate fields (e.g., fname, lname, email, etc.)
    return (
      fname !== "" &&
      lname !== "" &&
      email !== "" &&
      phone !== "" &&
      street !== "" &&
      city !== "" &&
      country !== "" &&
      zip !== ""
    );
  };

  return (
    <>
      <div className="checkout">
        <div className="form">
          <br />
          <br />

          {stage1 && (
            <Form>
              <Form.Group className="group">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  className="inputs"
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                  type="text"
                  placeholder="First Name"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="group">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  className="inputs"
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                  type="text"
                  placeholder="Last Name"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="group">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="inputs"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  placeholder="email123@mail.com"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="group">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  className="inputs"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  type="phone"
                  placeholder="(123) 456-7890"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="group">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  className="inputs"
                  onChange={(e) => {
                    setStreet(e.target.value);
                  }}
                  type="adress"
                  placeholder="685 Ewing st."
                ></Form.Control>
              </Form.Group>
              <Form.Group className="group">
                <Form.Label>City</Form.Label>
                <Form.Control
                  className="inputs"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  type="city"
                  placeholder="Cobourg"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="group">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  className="inputs"
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  type="country"
                  placeholder="Canada"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="group">
                <Form.Label>Zip code</Form.Label>
                <Form.Control
                  className="inputs"
                  onChange={(e) => {
                    setZip(e.target.value);
                  }}
                  type="zip"
                  placeholder="K9A 5N7"
                ></Form.Control>
              </Form.Group>
              <br />
              <br />
              <Row className="btnRow">
                <Col>
                  <Button className="buttons" onClick={handlePrev}>
                    Previous
                  </Button>
                </Col>
                <Col>
                  <Button className="buttons" onClick={handleNext}>
                    Next
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
          {stage2 && (
            <>
              <Form>
                <Card className="card">
                  <p>Item Total: ${totalAmount}</p>
                  <p>Shipping: ${shipping}</p>
                  <p>Taxes: ${taxes.toFixed(2)}</p>
                  <p>Total: ${total.toFixed(2)}</p>
                </Card>
                <br />
                <br />
                <Row className="btnRow">
                  <Col>
                    <Button className="buttons" onClick={handlePrev}>
                      Previous
                    </Button>
                  </Col>
                  <Col>
                    <Button className="buttons" onClick={handleNext}>
                      Continue to Payment
                    </Button>
                  </Col>
                </Row>
              </Form>{" "}
            </>
          )}
          {stage3 && (
            <>
              <Form>
                <Form.Group className="group">
                  <Form.Label>Cardholder Name</Form.Label>
                  <Form.Control
                    className="inputs"
                    onChange={(e) => {
                      setCardHolderName(e.target.value);
                    }}
                    type="text"
                    placeholder="Cardholder Name"
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="group">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    className="inputs"
                    onChange={(e) => {
                      setCardNum(e.target.value);
                    }}
                    type="text"
                    placeholder="Card Number"
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="group">
                  <Form.Label>Expiry date</Form.Label>
                  <Form.Control
                    className="inputs"
                    onChange={(e) => {
                      setExpiry(e.target.value);
                    }}
                    type="date"
                    placeholder="ex. 05/25"
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="group">
                  <Form.Label>CVV Code</Form.Label>
                  <Form.Control
                    className="inputs"
                    onChange={(e) => {
                      setCVV(e.target.value);
                    }}
                    type="cvv"
                    placeholder="Max of 3 numbers"
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="group">
                  <Form.Label>Card Type</Form.Label>
                  <Form.Group className="radio">
                    <Form.Control
                      className="inputs"
                      onChange={(e) => {
                        setCardType(e.target.value);
                      }}
                      type="radio"
                    ></Form.Control>
                    <Form.Label>Visa</Form.Label>
                  </Form.Group>
                  <Form.Group className="radio">
                    <Form.Control
                      className="inputs"
                      onChange={(e) => {
                        setCardType(e.target.value);
                      }}
                      type="radio"
                    ></Form.Control>
                    <Form.Label>Mastercard</Form.Label>
                  </Form.Group>
                  <Form.Group className="radio">
                    <Form.Control
                      className="inputs"
                      onChange={(e) => {
                        setCardType(e.target.value);
                      }}
                      type="radio"
                    ></Form.Control>
                    <Form.Label>Paypal</Form.Label>
                  </Form.Group>
                </Form.Group>
                <br />
                <br />
                <Row className="btnRow">
                  <Col>
                    <Button className="buttons" onClick={handlePrev}>
                      Previous
                    </Button>
                  </Col>
                  <Col>
                    <Button className="buttons" onClick={handleNext}>
                      Confirm Payment
                    </Button>
                  </Col>
                </Row>
              </Form>{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Checkout;
