import React from "react";

import MenuItem from "../menu-item/menu-item";

import "./directory.scss";
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkURL: "hats"
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkURL: ""
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkURL: ""
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkURL: ""
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkURL: ""
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps}></MenuItem>
        ))}
      </div>
    );
  }
}

export default Directory;
