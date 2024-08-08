import css from "./AddProfileForm.module.css";

const AddProfileForm = ({ onAddProfile }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formElements = e.currentTarget.elements;

    const name = formElements.profileName.value;
    const phone = formElements.profileNumber.value;
    const email = formElements.profileEmail.value;
    const hasPhisicalAddress = formElements.profilePhisicalAddress.checked;
    const status = formElements.profileStatus.value;

    const profileObject = {
      name,
      phone,
      email,
      hasPhisicalAddress,
      status,
      avatar: "https://example.com/avatars/kateryna.jpg",
    };

    onAddProfile(profileObject);

    e.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="">
        <span>Імʼя користувача:</span>
        <input
          type="text"
          name="profileName"
          placeholder="Іван Петров"
          required
        />
      </label>
      <label htmlFor="">
        <span>Номер телефону:</span>
        <input
          type="text"
          name="profileNumber"
          placeholder="+3805000000"
          required
        />
      </label>
      <label htmlFor="">
        <span>E-mail:</span>
        <input
          type="email"
          name="profileEmail"
          placeholder="example@mail.com"
          required
        />
      </label>
      <p>Статус Активності:</p>
      <label htmlFor="">
        <span>
          Online: <input type="radio" name="profileStatus" value="online" />
        </span>
        <span>
          Offline: <input type="radio" name="profileStatus" value="offline" />
        </span>
      </label>
      <label htmlFor="">
        <span>Фізична адреса? </span>
        <input type="checkbox" name="profilePhisicalAddress" />
      </label>

      <button className={css.addBtn} type="submit">
        Add new Profile 💁🏻‍♂️
      </button>
    </form>
  );
};

export default AddProfileForm;
