import { Attributes } from '@/model/Attributes';
import { Item, ItemType, Weapon, Armor, Gear } from '@/model/Item';

export enum GangStatus {
  isBribing,
  isControlling,
  isEquipping,
  isGiving,
  isHealing,
  isHiding,
  isIdle,
  isInfluencing,
  isMoving,
  isRioting,
  isResearching,
  isTerminated,
}

export interface GangShape {
  name: string;
  attributes: Attributes;
}

export class Gang {
  public name: string;
  public force: number;
  public status: GangStatus;
  public attributes: Attributes;

  public weapon?: Weapon;
  public armor?: Armor;
  public gear?: Gear;

  private maxForce = 10;

  public get statistics(): Attributes {
    return this.applyBuffs({
      ...this.attributes,
      force: this.force,
    });
  }

  public constructor(shape: GangShape) {
    const { attributes } = shape;
    this.name = shape.name;
    this.force = attributes.force; // TODO: Random starting force
    this.status = GangStatus.isIdle;
    this.attributes = attributes;
  }

  public terminate(): Gang {
    this.status = GangStatus.isTerminated;
    return this;
  }

  public takeDamage(damage: number): Gang {
    this.force -= damage;

    if (this.force <= 0) {
      this.status = GangStatus.isTerminated;
    }

    return this;
  }

  public heal(force: number): Gang {
    this.force += force;

    if (this.force < this.maxForce) {
      this.force = this.maxForce;
    }

    return this;
  }

  public control(): Gang {
    this.status = GangStatus.isControlling;
    return this;
  }

  public influence(): Gang {
    this.status = GangStatus.isInfluencing;
    return this;
  }

  public riot(): Gang {
    this.status = GangStatus.isRioting;
    return this;
  }

  public bribe(): Gang {
    this.status = GangStatus.isBribing;
    return this;
  }

  public research(): Gang {
    this.status = GangStatus.isResearching;
    return this;
  }

  public give(type: ItemType, toGang: Gang): Gang {
    this.status = GangStatus.isGiving;

    switch (type) {
      case ItemType.Weapon:
        toGang.equip(this.unequip(ItemType.Weapon));
        return this;
      case ItemType.Armor:
        toGang.equip(this.unequip(ItemType.Armor));
        return this;
      case ItemType.Gear:
        toGang.equip(this.unequip(ItemType.Armor));
        return this;
    }
  }

  public equip(item: Item): Gang {
    this.status = GangStatus.isEquipping;

    switch (item.type) {
      case ItemType.Weapon:
        this.weapon = item as Weapon;
        return this;
      case ItemType.Armor:
        this.armor = item as Armor;
        return this;
      case ItemType.Gear:
        this.gear = item as Gear;
        return this;
    }
  }

  private unequip(type: ItemType): Item {
    switch (type) {
      case ItemType.Weapon:
        const weapon = this.weapon;
        this.weapon = undefined;
        return weapon as Item;
      case ItemType.Armor:
        const armor = this.armor;
        this.armor = undefined;
        return armor as Item;
      case ItemType.Gear:
        const gear = this.gear;
        this.gear = undefined;
        return gear as Item;
    }
  }

  private applyBuffs(statistics: Attributes): Attributes {
    if (this.weapon) {
      statistics = {
        ...statistics,
        ...this.weapon,
      };
    }

    if (this.armor) {
      statistics = {
        ...statistics,
        ...this.armor,
      };
    }

    if (this.gear) {
      statistics = {
        ...statistics,
        ...this.gear,
      };
    }

    return statistics;
  }
}
