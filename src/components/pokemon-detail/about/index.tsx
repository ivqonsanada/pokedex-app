/** @jsxImportSource @emotion/react */

import { useParams } from "react-router";
import { css } from "@emotion/react";
import weightOutline from "@iconify/icons-healthicons/weight-outline";
import rulerVertical from "@iconify/icons-la/ruler-vertical";
import { Icon } from "@iconify/react";
import configureMeasurements, { length, mass } from "convert-units";

import { useUnit } from "hooks/useUnit";

type Props = {
  data: any;
  moves: number;
};

const PokemonDetailAbout: React.FC<Props> = ({ data, moves }) => {
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
    color: "rgb(148 163 184)",
    "> p": {
      margin: "0 4px",
    },
    "> * + *": {
      marginTop: "12px",
    },
  });

  const capitalize = css({ textTransform: "capitalize" });
  const fontBold = css({ fontWeight: "bold" });

  const aboutContainerStyle = css({
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    padding: "24px 16px",
    borderRadius: "0.5em",
    border: "solid 1px rgb(71 85 105)",
    // backgroundColor: "rgb(30 41 59)",
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
    height: "1.6em",
    width: "1px",
    borderRadius: "1em",
    backgroundColor: "rgb(51 65 85)",
    margin: "auto",
    opacity: 0.6,
  });

  const listFormatter = new Intl.ListFormat("en", { style: "long", type: "conjunction" });
  const abilities = data.abilities.map((e: any) => e.ability.name);

  return (
    <div css={containerStyle}>
      <p>
        <span css={capitalize}>{params.name}</span> has {abilities.length} abilities:
        <span css={fontBold}> {data && listFormatter.format(abilities)}</span>. It also
        has {moves} moves to use in a battle.
      </p>
      <div css={aboutContainerStyle}>
        <div>
          <div>
            <Icon css={iconStyle} icon={weightOutline} />
          </div>
          <div>
            <p>
              <span css={fontBold}>{weight.kg}</span> ({weight.lb})
            </p>
            <p css={labelStyle}>Weight</p>
          </div>
        </div>
        <div css={separatorStyle}></div>
        <div>
          <div>
            <p>
              <span css={fontBold}>{height.m}</span> <span>({height.inch})</span>
            </p>
            <p css={labelStyle}>Height</p>
          </div>
          <div>
            <Icon css={iconStyle} icon={rulerVertical} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailAbout;
