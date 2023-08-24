// Copyright 2021 The Casdoor Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from "react";
import * as Setting from "../../Setting";
import {Dropdown} from "antd";
import "../../App.less";
import {GlobalOutlined} from "@ant-design/icons";
import br_svg from "../../assets/images/flag-icons/BR.svg";
import cn_svg from "../../assets/images/flag-icons/CN.svg";
import de_svg from "../../assets/images/flag-icons/DE.svg";
import es_svg from "../../assets/images/flag-icons/ES.svg";
import fr_svg from "../../assets/images/flag-icons/FR.svg";
import gb_svg from "../../assets/images/flag-icons/GB.svg";
import id_svg from "../../assets/images/flag-icons/ID.svg";
import in_svg from "../../assets/images/flag-icons/IN.svg";
import jp_svg from "../../assets/images/flag-icons/JP.svg";
import kr_svg from "../../assets/images/flag-icons/KR.svg";
import ru_svg from "../../assets/images/flag-icons/RU.svg";
import sg_svg from "../../assets/images/flag-icons/SG.svg";
import us_svg from "../../assets/images/flag-icons/US.svg";
import vn_svg from "../../assets/images/flag-icons/VN.svg";

function flagIcon(country, alt) {

  let logo = "";
  if (country === "BR") {
    logo = br_svg;
  } else if (country === "CN") {
    logo = cn_svg;
  } else if (country === "DE") {
    logo = de_svg;
  } else if (country === "ES") {
    logo = es_svg;
  } else if (country === "FR") {
    logo = fr_svg;
  } else if (country === "GB") {
    logo = gb_svg;
  } else if (country === "ID") {
    logo = id_svg;
  } else if (country === "IN") {
    logo = in_svg;
  } else if (country === "JP") {
    logo = jp_svg;
  } else if (country === "KR") {
    logo = kr_svg;
  } else if (country === "RU") {
    logo = ru_svg;
  } else if (country === "SG") {
    logo = sg_svg;
  } else if (country === "US") {
    logo = us_svg;
  } else if (country === "VN") {
    logo = vn_svg;
  }
  return (
    <img width={24} alt={alt} src={logo} />
  );
  // return (
  //   <img width={24} alt={alt} src={`${Setting.StaticBaseUrl}/flag-icons/${country}.svg`} />
  // );
}

class LanguageSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props,
      languages: props.languages ?? Setting.Countries.map(item => item.key),
    };

    Setting.Countries.forEach((country) => {
      new Image().src = `${Setting.StaticBaseUrl}/flag-icons/${country.country}.svg`;
    });
  }

  items = Setting.Countries.map((country) => Setting.getItem(country.label, country.key, flagIcon(country.country, country.alt)));

  getOrganizationLanguages(languages) {
    const select = [];
    for (const language of languages) {
      this.items.map((item, index) => item.key === language ? select.push(item) : null);
    }
    return select;
  }

  render() {
    const languageItems = this.getOrganizationLanguages(this.state.languages);
    const onClick = (e) => {
      Setting.setLanguage(e.key);
    };

    return (
      <Dropdown menu={{items: languageItems, onClick}} >
        <div className="select-box" style={{display: languageItems.length === 0 ? "none" : null, ...this.props.style}} >
          <GlobalOutlined style={{fontSize: "24px", color: "#4d4d4d"}} />
        </div>
      </Dropdown>
    );
  }
}

export default LanguageSelect;
