(() => {
  // *************** SOLID ***************
  // NO APLICANDO EL PRINCIPIO DE RESPONSABILIDAD ÚNICA
  // UNA CLASE DEBE TENER UNA ÚNICA RESPONSBAILIDAD CON EL OBJETIVO DE QUE SE PUEDA EXPANDIR FACILMENTE
  type Gender = "M" | "F";

  class Person {
    //*************** Forma larga declaración de clase ***************

    // public name: string;
    // public gender: Gender;
    // public birthdate: Date;

    // constructor(name: string, gender: Gender, birthdate: Date) {
    //   this.name = name;
    //   this.gender = gender;
    //   this.birthdate = birthdate;
    // }

    //*************** Forma REDUCIDA declaración de clase - IDEM CODIGO ANTERIOR ***************
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  // Esta clase es muy compleja, ya que maneja muchas cosas, tiene responsabilidades sobe los datos personales, datos de acceso, etc
  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      name: string,
      gender: Gender,
      birthdate: Date,
      email: string,
      role: string
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const newUserSettings = new UserSettings(
    "usr/home",
    "home",
    "Vicky",
    "F",
    new Date("1985-10-21"),
    "vicky@rook.com",
    "arranger"
  );

  console.log({
    newUserSettings,
    areCredentialsValid: newUserSettings.checkCredentials(),
  });
  //   const newUser = new User()

  //   const newPerson = new Person("Vicky", "F", new Date("1985-10-21"));
  //   console.log({ newPerson });
})();
