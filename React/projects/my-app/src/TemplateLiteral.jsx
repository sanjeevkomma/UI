import React from 'react';

let course = "React JS";

const TemplateLiteral = () => {
    return (
        <div>
            {`I am Learning ${course}`}
        </div>
    );
}

export default TemplateLiteral;