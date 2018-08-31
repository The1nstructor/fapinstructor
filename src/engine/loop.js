import visibilityChange from "utils/visibility";
import present from "present";

/**
 * The game loop will automatically start when this file is imported
 */
let visible = true;

visibilityChange(visibility => {
  visible = visibility;
  if (!visible) {
    setTimeout(() => update(present()), 0);
  }
});

let subscribers = [];
let lastRender = 0;

const update = timestamp => {
  const progress = timestamp - lastRender;

  subscribers.forEach(callback => {
    callback(progress);
  });

  lastRender = timestamp;

  if (visible) {
    requestAnimationFrame(update);
  } else {
    setTimeout(() => update(present()), 0);
  }
};
console.error(present());
update(present());

const subscribe = callback => {
  // If the loop callback has an onSubscribe event call it.
  // Usually this is used to initialize default values
  if (typeof callback.onSubscribe === "function") {
    callback.onSubscribe();
  }

  return subscribers.push(callback);
};

const unsubscribe = id => {
  delete subscribers[id - 1];
};

export { subscribe, unsubscribe };
