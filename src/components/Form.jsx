import React from 'react';

const Form = () => {
    return (
        <form>
            <input type="text" placeholder='Write the title'  autoCapitalize='off' name='title' id='title'/>
            <input type="text" placeholder='Write the content body' autoCapitalize='off' name='body'  id='body'/>
            <button type='submit'>Post</button>
        </form>
    );
};

export default Form;