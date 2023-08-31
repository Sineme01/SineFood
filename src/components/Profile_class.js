import React from "react";
import { Link } from "react-router-dom";
import cfIcon from "../assets/img/code-forces.png"
import github from "../assets/img/github.png"
import codechef from "../assets/img/codechef.png"
class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        // name: "dummy name",
        // location: "dummy location",
        // avatar_url: "https://avatars.githubusercontent.com/u/89066810?v=4",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Sineme01");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    return (
      <div >
        <div className="ml-28 shadow-lg mr-[900] border-2 p-5 mt-14">
          <h2 className="font-bold text-4xl ml-36">About Me</h2>
          {/* <h3>Name:- {this.state.userInfo.name}</h3> */}
          {/* <h3>Location:- {this.state.userInfo.location}</h3> */}
          <img src={this.state.userInfo.avatar_url} className="rounded-full shadow-lg w-52 mt-5 ml-32"></img>
          <div className="flex mt-5 flex-wrap">
            <h1 className="font-weight-[400] text-md mt-1">IIT Patna' 24</h1>
            <h3 className="mx-2 mt-1">|</h3>
            <h1 className="font-weight-[400] text-md mt-1">Competitive Programmer</h1>
            <h3 className="mx-2 mt-1">|</h3>
            <h1 className="font-weight-[400] text-md mt-1">React.js</h1>
            <h3 className="mx-2 mt-1">|</h3>
            <h1 className="font-weight-[400] text-md mt-1">JavaScript</h1>
            <h3 className="mx-2 mt-1">|</h3>
            <h1 className="font-weight-[400] text-md mt-1">HTML5</h1>
            <h3 className="mx-2 mt-1">|</h3>
            {/* <h1 className="font-weight-[400] text-md mt-1">CSS3</h1>
            <h3 className="mx-2 mt-1">|</h3> */}
            <h1 className="font-weight-[400] text-md mt-1">TailWind CSS</h1>
            <h3 className="mx-2 mt-1">|</h3>
            <h1 className="font-weight-[400] text-md mt-1">Redux</h1>
            <h3 className="mx-2 mt-1">|</h3>
            <h1 className="font-weight-[400] text-md mt-1">Front End Developer</h1>
          </div>
          <div className="flex flex-wrap mt-5 ml-28">
            <a href="https://codeforces.com/profile/SineAnand"><img src={cfIcon} className="mt-1"></img></a>
            <a href="https://www.codechef.com/users/sineanand"><img src={codechef} className="w-[36] ml-5"></img></a>
            <a href="https://www.linkedin.com/in/sineanand/"><img src={"https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"} className="w-[44] ml-5"></img></a>
            <a href="https://github.com/Sineme01"><img src={github} className="w-[36] ml-5"></img></a>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
