/** Pure CSS site-wide background — no JS, no animation loops, GPU composited only.
 *  Three gradient "light sources" breathe slowly via CSS opacity keyframes.
 *  A dot grid adds technical depth. A static grain overlay adds tactile texture.
 */
export default function SiteBackground() {
  return (
    <div className="site-bg" aria-hidden="true">
      <div className="site-bg-grid" />
      <div className="site-bg-grain" />
    </div>
  );
}
