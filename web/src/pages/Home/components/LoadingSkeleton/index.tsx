"use client";

import {
  SkeletonCard,
  SkeletonLine,
  SkeletonRow,
  Divider,
  SkeletonGroup,
} from "./styles";

export default function LoadingSkeleton() {
  return (
    <SkeletonCard>
      <SkeletonRow>
        <SkeletonLine $w="180px" $h="22px" />
        <SkeletonLine $w="100px" $h="10px" />
      </SkeletonRow>
      <Divider />
      <SkeletonGroup>
        <SkeletonLine $w="100%" />
        <SkeletonLine $w="90%" />
        <SkeletonLine $w="75%" />
        <SkeletonLine $w="85%" />
      </SkeletonGroup>
    </SkeletonCard>
  );
}
