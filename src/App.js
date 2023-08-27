import { useEffect, useState } from "react";
import { Col, Row, Toast, ToastContainer } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function App() {
  const [showA, setShowA] = useState(false);

  useEffect(() => {
    const popupTimeout = setTimeout(() => { setShowA(true) }, 3000)

    return () => {
      clearTimeout(popupTimeout)
    }
  }, [])

  return (
    <Container>
      <Row>
        <Col className="bg-success-subtle p-4" xs={{ span: 12, order: 3 }} sm={6} md={4}>Yeni Çıkan ÜRünler</Col>
        <Col xs={{ span: 12, order: 2 }} sm={6} md={4}>En Çok Satan Ürünler</Col>
        <Col xs={{ span: 12, order: 1 }} sm={6} md={4}>Kampanyalı Ürünler</Col>
      </Row>

      <Row>
        <Col>Erkek Mağaza</Col>
        <Col>Kadın Mağaza</Col>
      </Row>

      <Row>
        <Col>
          <ToastContainer
            className="p-3"
            position={"bottom-end"}
            style={{ zIndex: 1 }}
          >
            <Toast show={showA} onClose={() => { setShowA(false) }}>
              <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">Twitter</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>Hello, dünya! This is a toast message.</Toast.Body>
            </Toast>
          </ToastContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
