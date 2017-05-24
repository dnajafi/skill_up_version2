import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';


const HomePage = () => (
  <Card style={{backgroundColor: '#DCDCDC', fontFamily: 'Open Sans'}} className="container">
    <CardTitle title="Welcome to Skill Up!" subtitle="Please sign up or log in to start learning!" />
  </Card>
);

export default HomePage;