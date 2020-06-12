import React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';

class About extends React.Component {
  render() {
    return (
      <Layout title="About">
        <div className="container">
          <div className="row">
            <h1>About us</h1>
            <p>
              Inventore corporis explicabo quia et aliquam et recusandae fuga
              assumenda. Voluptatem voluptas enim praesentium commodi ipsa
              adipisci. Et voluptatem eos. Non non harum omnis magni distinctio
              laborum ut iste.
            </p>
            <Card title="Something">
              LipsVeniam incididunt commodo consequat fugiat Lorem elit ad
              labore amet sunt ad exercitation minim fugiat.
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}

export default About;
