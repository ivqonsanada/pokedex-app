/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Icon } from "@iconify/react";
import weightOutline from "@iconify/icons-healthicons/weight-outline";
import ruler24Regular from "@iconify/icons-fluent/ruler-24-regular";
import { useParams } from "react-router";
import { useUnit } from "hooks/useUnit";
import configureMeasurements, { mass, length } from "convert-units";

type Props = {
  data: any;
};

const PokemonDetailAbout: React.FC<Props> = ({ data }) => {
  const params = useParams();
  const unitFormatter = useUnit;
  const convertMass = configureMeasurements({ mass });
  const convertLenght = configureMeasurements({ length });

  const height = {
    m: unitFormatter("meter", data.height / 10),
    inch: unitFormatter(
      "foot",
      convertLenght(data.height / 10)
        .from("m")
        .to("ft")
    ),
  };

  const weight = {
    kg: unitFormatter("kilogram", data.weight / 10),
    lb: unitFormatter(
      "pound",
      convertMass(data.weight / 10)
        .from("kg")
        .to("lb")
    ),
  };

  const containerStyle = css({
    width: "100%",
    padding: "0 24px",
    color: "rgb(148 163 184)",
    "> * + *": {
      marginTop: "24px",
    },
  });

  const capitalize = css({ textTransform: "capitalize" });
  const fontBold = css({ fontWeight: "bold" });

  const aboutContainerStyle = css({
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    padding: "24px",
    borderRadius: "1em",
    backgroundColor: "rgb(30 41 59)",
    "> div:first-of-type, > div:last-of-type": {
      display: "flex",
      "> * + *": {
        marginLeft: "6px",
      },
    },
  });

  const iconStyle = css({
    width: "1.5em",
    height: "1.5em",
  });

  const labelStyle = css({
    fontSize: "0.9em",
    textAlign: "center",
    color: "rgb(100 116 139)",
    marginTop: "4px",
  });

  const separatorStyle = css({
    height: "2em",
    width: "2px",
    borderRadius: "1em",
    backgroundColor: "rgb(51 65 85)",
    margin: "auto",
  });

  const listFormatter = new Intl.ListFormat("en", { style: "long", type: "conjunction" });
  const abilities = data.abilities.map((e: any) => e.ability.name);

  return (
    <div css={containerStyle}>
      <p>
        <span css={capitalize}>{params.name}</span> has {abilities.length} abilities:
        <span> {data && listFormatter.format(abilities)}</span>.
      </p>
      <div css={aboutContainerStyle}>
        <div>
          <div>
            <Icon css={iconStyle} icon={weightOutline} />
          </div>
          <div>
            <p css={fontBold}>
              {weight.kg} ({weight.lb})
            </p>
            <p css={labelStyle}>Weight</p>
          </div>
        </div>
        <div css={separatorStyle}></div>
        <div>
          <div>
            <Icon css={iconStyle} icon={ruler24Regular} />
          </div>
          <div>
            <p css={fontBold}>
              {height.m} ({height.inch})
            </p>
            <p css={labelStyle}>Height</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailAbout;
