type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};

export const tree: BinaryNode<number> = {
    value: 20,
    right: {
        value: 50,
        right: null,
        left: null,
    },
    left: {
        value: 10,
        right: null,
        left: null,
    },
};

export const tree2: BinaryNode<number> = {
    value: 20,
    right: {
        value: 50,
        right: {
            value: 24,
            right: null,
            left: null,
        },
        left: null,
    },
    left: {
        value: 10,
        right: null,
        left: null,
    },
};

export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    if (a === null && b === null) {
        return true;
    }

    if (a === null || b === null) {
        return false;
    }

    if (a.value !== b.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}

compare(tree, tree2);
