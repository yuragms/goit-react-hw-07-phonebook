
import ContainerApp from "./Container/Container.jsx";
import Form from "./ContactForm/ContactForm.jsx";
import { Title } from "./Container/Container.styled.jsx";
import ContactList  from "./ContactList/ContactList.jsx";
import Filter  from "./Filter/Filter.jsx";

import Counter from './Counter/Counter.jsx';

function App () {
 


 

    return (
      <ContainerApp>
        <Title>Phonebook</Title>
        <Form />
        <Title>Contacts</Title>
        <Filter

           />
        <ContactList

         />
        <Counter />
      </ContainerApp>
    );
  
}

export default App;

 





