import React from "react";
export class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //state variable
    this.state = {
      Count: 0,
      Count2: 1,
      userInfo: {
        Name: " Suraj",
        Location: " Delhi",
        Contact: 9891 + "******",
        avatar_url: "http//dummy.photo",
      },
    };
    console.log(this.props);
  }
  //calling api
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Surya-Bhai007");
    const json = await data.json();
    console.log(json);
    {
      this.setState({
        //   userInfo: (this.state.userInfo = { ...json }),
        userInfo: { ...json },
      });
    }
  }

  componentWillUnmount() {
    console.log(
      "componentWillUnmount called invoked because page/routes ui changed,when  the current showing ui/data disappear means if we switch to another page ,it is called at the end of react life cycle ,called as unmounting cycle method "
    );
  }

  render() {
    // const { Name, Location, Contact } = this.props;
    console.log("data", this.state.userInfo);
    const { Count, Count2 } = this.state;
    const { name, location, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="User-Card">
        <hr />
        <h1>Name:{name}</h1>
        <h1>Location:{location}</h1>
        <h1>Bio:{bio}</h1>
        <img src={avatar_url} alt="avatar image" />
        <h4>direct {this.state.Count}</h4>
        <h4>from destructure {Count2}</h4>
        <button
          onClick={() => {
            this.setState({
              Count: Count + 1, //using destructed
              Count2: this.state.Count2 + 1, //using full path
            });
          }}
        >
          Count Increase
        </button>
      </div>
    );
  }
}
