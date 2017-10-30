export declare type Props = {
    from?: number;
    acceleration?: number;
    friction?: number;
    velocity?: number;
    restSpeed?: number | false;
    springStrength?: number;
    springTarget?: number;
};
export declare type PhysicsInterface = {
    setAcceleration(v: number): PhysicsInterface;
    setFriction(v: number): PhysicsInterface;
    setSpringStrength(v: number): PhysicsInterface;
    setSpringTarget(v: number): PhysicsInterface;
    setVelocity(v: number): PhysicsInterface;
    stop(): void;
};
