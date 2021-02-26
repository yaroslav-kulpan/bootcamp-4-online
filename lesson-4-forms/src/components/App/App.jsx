import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";

function App() {
  const handleSubmit = async (values) => {
    try {
      alert(JSON.stringify(values, null, 2));
      // this.loginIn(true)
    } catch (e) {
      alert("Errors:");
    }
  };

  return (
    <div className="container">
      <LoginForm handleSubmit={handleSubmit} />
      <RegisterForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
