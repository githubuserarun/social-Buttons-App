const Button = (props) => {
  const { propertyName, btnName } = props;
  return <button className={propertyName}>{btnName}</button>;
};

const element = (
  <div className="bg_container">
    <h1>Social Buttons</h1>
    <div className="btn_container">
      <Button propertyName="btn1" btnName="Like" />
      <Button propertyName="btn2" btnName="Comment" />
      <Button propertyName="btn3" btnName="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
