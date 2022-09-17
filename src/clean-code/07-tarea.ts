(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  interface HtmlElementProps {
    id: string;
    type?: HtmlType;
  }

  class HtmlElement {
    public id: string;
    public type?: HtmlType;
    constructor({ id, type }: HtmlElementProps) {
      this.id = id;
      this.type = type;
    }
  }

  interface InputAttributesProps {
    value: string;
    placeholder: string;
  }

  class InputAttributes {
    public value: string;
    public placeholder: string;

    constructor({ value, placeholder }: InputAttributesProps) {
      this.value = value;
      this.placeholder = placeholder;
    }
  }

  class InputEvents {
    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  interface InputElementProps {
    value: string;
    placeholder: string;
    id: string;
  }

  class InputElement {
    public element: HtmlElement;
    public attributes: InputAttributes;
    public events: InputEvents;

    constructor({ value, placeholder, id }: InputElementProps) {
      this.element = new HtmlElement({ id, type: "input" });
      this.attributes = new InputAttributes({ value, placeholder });
      this.events = new InputEvents();
    }
  }

  const nameField = new InputElement({
    value: "Fernando",
    placeholder: "Enter first name",
    id: "txtName",
  });

  console.log({ nameField });
})();
