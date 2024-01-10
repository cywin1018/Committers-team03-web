/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
import Card0 from '/0.svg';
import Card1 from '/1.svg';
import Card2 from '/2.svg';
import Card3 from '/3.svg';
import Card4 from '/4.svg';
import Card5 from '/5.svg';
import Card6 from '/6.svg';
import Card7 from '/7.svg';
import Card8 from '/8.svg';
import Card9 from '/9.svg';
import Card10 from '/10.svg';
import {isReturnStatement} from 'typescript';

export default async (req, res) => {
  const fs = require('fs');
  const path = require('path');
  console.log(fs.readFileSync(Card10, 'utf8'));
  // snowmanHeight에 따라 파일 이름을 결정합니다.
  const filePath = (data) => {
    if (data.snowmanHeight < 130) {
      return Card0;
    } else if (data.snowmanHeight < 160) {
      return Card1;
    } else if (data.nowmanHeight < 190) {
      return Card2;
    } else if (data.snowmanHeight < 220) {
      return Card3;
    } else if (data.snowmanHeight < 250) {
      return Card4;
    } else if (data.snowmanHeight < 280) {
      return Card5;
    } else if (data.snowmanHeight < 310) {
      return Card6;
    } else if (data.snowmanHeight < 340) {
      return Card7;
    } else if (data.snowmanHeight < 370) {
      return Card8;
    } else if (data.snowmanHeight < 410) {
      return Card9;
    } else {
      return Card10;
    }
  };

  const renderSVG = (data) => {
    const svgContent = fs.readFileSync(filePath(data), 'utf8');
    console.log(svgContent);
    console.error(svgContent);

    return `
    ${svgContent}

  `;
  };
  try {
    // req.query에서 필요한 데이터를 직접 분해하여 할당합니다.
    const {
      nickname = 'Dummy Name',
      snowmanHeight = 223,
      attacking = 456,
      damage = 456,
      snowId = 1,
      hatId = 1,
      decoId = 1,
    } = req.query;

    const data = {
      nickname,
      snowmanHeight,
      attacking,
      damage,
      snowId,
      hatId,
      decoId,
    };

    // 파일 시스템 모듈을 사용하여 public 폴더에서 SVG 파일을 읽습니다.
    // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
    //const fs = require('fs');
    // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
    //const path = require('path');
    // eslint-disable-next-line no-undef
    //const filePath = path.join(process.cwd(), 'public', filename);
    //console.log(`${filename}`);
    // SVG 파일을 읽습니다.
    // const renderSVG = () => {
    //   return `
    //   ${filename}
    //   <style>
    //   .header { font: 700 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: #2f80ed; }
    //   .stat { font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: #333 }
    //   </style>
    //   <text x="10" y="25" class="header">Snowman Heights for ${data.nickname}</text>
    //   <text x="10" y="55" class="stat">Height: ${data.snowmanHeight} cm</text>
    //   <text x="10" y="80" class="stat">Attacked: ${data.damage} times</text>
    // </svg>
    // `;
    // };
    // // SVG 내용에 텍스트 요소를 추가합니다.
    // (svg = `${filename}
    //   <style>
    //   .header { font: 700 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: #2f80ed; }
    //   .stat { font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: #333 }
    //   </style>
    //   <text x="10" y="25" class="header">Snowman Heights for ${nickname}</text>
    //   <text x="10" y="55" class="stat">Height: ${snowmanHeight} cm</text>
    //   <text x="10" y="80" class="stat">Attacked: ${damage} times</text>
    // </svg>`);

    const svg = renderSVG(data);
    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(200).send(svg);
  } catch (error) {
    res.status(500).send('Error serving the SVG file');
  }
};

export {};
