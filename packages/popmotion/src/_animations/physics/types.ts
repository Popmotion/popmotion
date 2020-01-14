export type PhysicsProps = {
  from?: number;
  to?: number;
  acceleration?: number;
  friction?: number;
  velocity?: number;
  restSpeed?: number | false;
  springStrength?: number;
};

export type PhysicsInterface = {
  set(v: number): PhysicsInterface;
  setAcceleration(v: number): PhysicsInterface;
  setFriction(v: number): PhysicsInterface;
  setSpringStrength(v: number): PhysicsInterface;
  setSpringTarget(v: number): PhysicsInterface;
  setVelocity(v: number): PhysicsInterface;
  stop(): void;
};
