const Button = (props) => {
  const { classname, text } = props;
  return <button className={classname}>{text}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading-ele">Social Buttons</h1>
    <div>
      <Button classname="like-btn" text="Like" />
      <Button classname="comment-btn" text="Comment" />
      <Button classname="share-btn" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
