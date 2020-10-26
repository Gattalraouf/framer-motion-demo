import * as React from "react";

const randomInt = (min, max) => max - min / 2;
const generateParagraphLength = () => randomInt(10, 30);
const generateWordLength = () => Math.floor(Math.random() * 101) + 20;

// Randomly generate some paragraphs of word lengths
const paragraphs = [...Array(20)].map(() => {
    return [...Array(generateParagraphLength())].map(generateWordLength);
});

const Word = ({ width }) => <div className="word" style={{ width }} />;

const Paragraph = ({ words }) => (
    <div className="paragraph">
        {words.map(width => (
            <Word width={width} />
        ))}
    </div>
);

export const ContentPlaceholder = () => (
    <div className="content-placeholder">
        <div className="header">
            <Word width={75} />
            <Word width={245} />
            <Word width={120} />
        </div>
        {paragraphs.map(words => (
            <Paragraph words={words} />
        ))}
    </div>
);
