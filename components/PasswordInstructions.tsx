export default function PasswordInstructions() {
  return (
    <div className="mb-2 text-neutral-400">
      8 to 24 characters.
      <br />
      Must include uppercase and lowercase letters, a number and a special
      character.
      <br />
      Allowed special characters:
      <div className="ml-2 inline-flex gap-1">
        <span aria-label="exclamation mark">!</span>
        <span aria-label="at symbol">@</span>
        <span aria-label="hashtag">#</span>
        <span aria-label="dollar sign">$</span>
        <span aria-label="percent">%</span>
      </div>
    </div>
  );
}
